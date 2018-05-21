import React, { Component } from 'react';
import { getPhones } from './data/phones';
import Header from './Components/Header';
import PhoneList from './Components/PhoneList';
import PhoneDetail from './Components/PhoneDetail';
import Spinner from './Components/Spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
      currentPhone: null,
      loading: true
    };
    this.handlePhoneClick = this.handlePhoneClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  componentDidMount() {
    getPhones()
      .then(phones => this.setState({ 
        phones,
        loading: false
       }));
  }

  handlePhoneClick(phone) {
    this.setState({currentPhone: phone})
  }

  handleResetClick(event) {
    event.preventDefault();
    this.setState({currentPhone: null });
  }

  render() {
    const { currentPhone, phones, loading } = this.state;

    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <h1>Phones catalog</h1>
            {
              loading ? (
                <Spinner />
              ) : (
                null
              )
            }
            {
              currentPhone !== null ? (
                <PhoneDetail phone={ currentPhone } handleClick={this.handleResetClick} />
              ) : (
                <PhoneList phones={phones} handleClick={this.handlePhoneClick} />
              )
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;

                // {
                //   loading ? (
                //     <PhoneList phones={phones} handleClick={this.handlePhoneClick} />
                //   ) : (
                //     <Spinner />
                //   )
                // }
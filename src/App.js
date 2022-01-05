import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '방방방',
    'birthday': '951111',
    'gender': '남자',
    'job': '해커'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '뱅뱅뱅',
    'birthday': '990210',
    'gender': '여자',
    'job': '디자이너'
  } 
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer 
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;

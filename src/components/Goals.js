import React, {Component} from 'react';
import Goal from './Goal';

class Goals extends Component {
  constructor(props) {
    super(props);
  }
  


  componentDidMount() {
    const {goalsFetchData} = this.props;

    goalsFetchData();
  }


  
  render() {
    const {
      goals,
      goalsIsLoading
    } = this.props;
    let goalsList;

    if (goalsIsLoading) {
      return <p>Loading your goals...</p>
    }
    
    if (goalsIsLoading === false) {
      goalsList = goals.map(goal => <Goal key={goal._id} goal={goal} />);
    }

    return (
      <div>
        these are goals.
        <ul>
        {goalsList}
        </ul>
      </div>
    );
  }
}

export default Goals;
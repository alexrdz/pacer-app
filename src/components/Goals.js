import React, {Component} from 'react';
import Goal from './Goal';

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalsIndex: null
    }
  }
  
  componentDidMount() {
    const {goalsFetchData} = this.props;

    goalsFetchData();
  }
  
  componentWillReceiveProps() {
    this.setState(function (prevState, props) {
      return {goalsIndex: (props.goalsIndex)}
    });
  }

  handleGetPrevious = () => {
    this.setState(function (prevState, props) {
      console.log('props.goalsIndex', props.goalsIndex);
      console.log('prevState', prevState);
      if (prevState.goalsIndex > 0) {
        return {goalsIndex: (prevState.goalsIndex - 1)};
      }
    });
  }

  handleGetNext = () => {
    this.setState(function (prevState, props) {
      if (prevState.goalsIndex < (props.goals.length - 1)) {
        return {goalsIndex: (prevState.goalsIndex + 1)};
      }
    });
  }


  
  render() {
    const {
      goals,
      goalsIsLoading,
      goalsIndex
    } = this.props;
    let goalsList;

    if (goalsIsLoading) {
      return <p>Loading your goals...</p>;
    }

    if (!goalsIsLoading) {
      const goalsList = goals.map(goal => <Goal key={goal._id} goal={goal} />);

      return (
        <div>
          
          
          <div className="flex items-start mb-6">
            <button 
              className = "mr-2"
              onClick={this.handleGetPrevious}>
              &lt; prev
            </button> 
            
            {goalsList[this.state.goalsIndex]}

            <button onClick={this.handleGetNext}>
              next &gt;
            </button>
          </div>


        </div>
      );
      
    }

    return (
        <p>Loading goals...</p>
    );
  }
}

export default Goals;
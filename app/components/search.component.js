// ES6 Component
// Import React
import React from 'react';

// Search component created as a class
class Search extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
            {/* Notice how values and callback are passed using props */}
                <input type="text" value={this.props.searchValue} onChange={this.props.handleChange}/>
                <input type="submit" />
            </form>
        );
    } 
}

// Export for re-use
export default Search
const buttons = [
    { caption: 'blue', url: '0' },
    { caption: 'purple', url: '1' },
    { caption: 'green', url: '2' },
    { caption: 'red', url: '3' },
    { caption: 'pink', url: '4' }
];


class App extends React.Component {
    static defaultProps = {
        title: 'Please set title text',
        subtitle: 'Please set sub title text'
    };

    render() {
        return (<div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
            <ListItems items={this.props.buttonsObj} /></div>);
    }
}

class ListItems extends React.Component {
    constructor() {
        super();
        this.disableButton = this.disableButton.bind(this);
        this.state = {
            buttonState: [false, false, false, false, false],
        };
    }


    disableButton = i => {
        let a = this.state.buttonState.slice(); //creates the clone of the state
        a[i] = !a[i];
        this.setState({ buttonState: a });
    };


    render() {
        const items = this.props.items.map(
            item => <button className={item.url + ((this.state.buttonState[item.url] == false) ? ' enable' : ' disable')} onClick={() => this.disableButton(item.url)} key={item.url}>{item.caption}</button>
        );
        return <ul>{items}</ul>;
    }
}

ReactDOM.render(<App title="Which colors do you want?"
    subtitle="(disable the ones you don't want with a click)"
    buttonsObj={buttons}
/>, document.getElementById('app'));
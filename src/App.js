const Show = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.title),
        React.createElement("h2", {}, props.headliner),
        React.createElement("h3", {}, props.tagline),
        React.createElement("p", {}, props.isAvailable),
    ]);
};

const App = () => {
    return React.createElement("some-kinda-tag", {}, [
        React.createElement("h1", {}, "Ticket Monopoly"),
        React.createElement(Show, {
            title: "The Era's Tour",
            headliner: "Taylor Swift",
            tagline: "Meet me at Midnights",
            isAvailable: true,
        }),
        React.createElement(Show, {
            title: "Happier Than Ever",
            headliner: "Billie Eilish",
            tagline: "The Hometown Encore",
            isAvailable: false,
        }),
        React.createElement(Show, {
            title: "HOLY FVCK",
            headliner: "Demi Lovato",
            tagline: "",
            isAvailable: false,
        }),
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

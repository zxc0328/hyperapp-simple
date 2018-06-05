import { h, app } from "hyperapp";

const List = ({ lists, actions }) => (
  <div
    oncreate={() => {
      fetch("/api/topics/hot.json")
        .then(res => {
          return res.json();
        })
        .then(re => {
          actions.setList(re);
        });
    }}
  >
    {lists.map(item => {
      return <li>{item.title}</li>;
    })}
  </div>
);

const state = {
  lists: []
};

const actions = {
  setList: value => state => ({ lists: value })
};

const view = (state, actions) => (
  <div>
    <List lists={state.lists} actions={actions} />
  </div>
);

app(state, actions, view, document.body);

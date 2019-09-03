import { observable } from 'mobx';
export default observable({
  ready: false,
  activePage: {
    path: '',
    content: ''
  }
});

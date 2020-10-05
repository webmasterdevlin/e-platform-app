import React, { Component } from 'react';
interface IProps {
  file?: any | (any & Blob);
}
interface IState {
  loading: boolean;
  thumb: any;
}
export default class ThumbnailImageClass extends Component<IProps, IState> {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps({ file }) {
    if (!file.name) return;
    this.setState({ loading: true }, () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };
      reader.readAsDataURL(file);
    });
  }
  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;
    if (!file) return null;
    if (loading) return <h5>loading..</h5>;
    return (
      <img alt={file.name} src={thumb ? thumb : 'https://picsum.photos/200'} />
    );
  }
}

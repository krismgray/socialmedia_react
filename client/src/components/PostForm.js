import React from 'react';
import { Form, Button, Grid } from 'semantic-ui-react';

class PostForm extends React.Component {
  state = { title: '', body: '' }

  handleChange = (e) => {
    e.preventDefault()
    let { target: { name, value }} = e;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    this.props.addPost({...this.state})
    this.setState({ title: '', body: '' })
  }

  render() {
    return(
      <Grid centered columns={2}>
        <Grid.Column>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Label>Title</Label>
            <input
              value={title}
              name='title'
              onChange={this.handleChange}
            />
          </Form.Field>
          <br />
          <Form.Field>
            <Label>Body</Label>
            <input
              value={body}
              name='body'
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        </Grid.Column>
      </Grid>
    )
  }

}

export default PostForm;

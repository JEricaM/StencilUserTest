import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <p>My name is {this.last} {this.first}</p>
    );
  }
}
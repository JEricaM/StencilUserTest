import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'test-test-test',
  styleUrl: 'test-test-test.css',
  shadow: true,
})
export class TestTestTest {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

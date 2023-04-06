import { newSpecPage } from '@stencil/core/testing';
import { TestTestTest } from '../test-test-test';

describe('test-test-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestTestTest],
      html: `<test-test-test></test-test-test>`,
    });
    expect(page.root).toEqualHtml(`
      <test-test-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-test-test>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('should render', async () => {
        const page = await newSpecPage({
            html: `<my-component first="Julia" last="Roberts"></my-component>`,
            components: [MyComponent]
        });
        expect(page.root).toEqualHtml(`
            <my-component first="Julia" last="Roberts">
                <mock:shadow-root>
                    <p>
                        My name is Roberts Julia
                    </p>
                </mock:shadow-root>
            </my-component>
        `);
    });
});
import { chromaticParameters, colorScheme, getColorSchemeTemplate, getMetaArguments } from '@/storybook';
import { UIState } from '@/declaration';
import VsContainer from '@/components/vs-container/VsContainer.vue';
import VsRadioSet from '../VsRadioSet.vue';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof VsRadioSet> = {
    title: 'Components/Input Components/VsRadioSet',
    component: VsRadioSet,
    render: (args: any) => ({
        components: { VsRadioSet },
        setup() {
            return { args };
        },
        template: '<vs-radio-set v-bind="args"  />',
    }),
    tags: ['autodocs'],
    argTypes: {
        colorScheme,
    },
    args: {
        name: 'fruit',
        options: ['Apple', 'Banana', 'Carrot'],
    },
};

meta.args = getMetaArguments(VsRadioSet.props, meta.args);
export default meta;
type Story = StoryObj<typeof VsRadioSet>;

export const Default: Story = {};

export const ColorScheme: Story = {
    render: (args: any) => ({
        components: { VsRadioSet },
        setup() {
            const options = ['Apple', 'Banana', 'Carrot'];
            return { args, options };
        },
        template: `
            <div>
                ${getColorSchemeTemplate(`
                    <vs-radio-set v-bind="args"
                        color-scheme="{{ color }}"
                        name="color"
                        :options="options"
                    />
                `)}
            </div>
        `,
    }),
    parameters: {
        chromatic: chromaticParameters.theme,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    parameters: {
        chromatic: chromaticParameters.theme,
    },
};

export const Label: Story = {
    args: {
        label: 'Choose your favorite(s)',
    },
};

export const Messages: Story = {
    args: {
        messages: [{ state: UIState.Warning, text: 'This is warning message' }],
    },
};

export const Readonly: Story = {
    args: {
        readonly: true,
    },
};

export const Column: Story = {
    args: {
        column: true,
    },
};

export const Width: Story = {
    render: (args: any) => ({
        components: { VsRadioSet, VsContainer },
        setup() {
            return { args };
        },
        template: `
            <vs-container>
                <vs-radio-set v-bind="args" />
                <vs-radio-set v-bind="args" />
            </vs-container>
        `,
    }),
    args: {
        width: { md: '300px', lg: '400px' },
    },
};

export const Grid: Story = {
    render: (args: any) => ({
        components: { VsRadioSet, VsContainer },
        setup() {
            return { args };
        },
        template: `
            <vs-container>
                <vs-radio-set v-bind="args" />
                <vs-radio-set v-bind="args" />
            </vs-container>
        `,
    }),
    args: {
        grid: { md: 6, lg: 3 },
    },
};

export const StyleSet: Story = {
    args: {
        styleSet: {
            labelColor: '#1e18e5',
            labelFontSize: '1.2rem',
            radioColor: '#18a865',
            radioSize: '2.4rem',
            radioMargin: '8rem',
        },
    },
};

export const PreDefinedStyleSet: Story = {
    args: {
        styleSet: 'myStyleSet',
    },
};

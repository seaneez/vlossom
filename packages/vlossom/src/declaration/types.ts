import type { VsButtonStyleSet, VsInputStyleSet, VsSectionStyleSet } from '@/components';
import { Ref } from 'vue';

export enum VsComponent {
    VsButton = 'VsButton',
    VsInput = 'VsInput',
    VsSection = 'VsSection',
}

export type ColorScheme = 'red' | 'amber' | 'green' | 'teal' | 'blue' | 'indigo' | 'purple' | 'pink';

export type GlobalColorScheme = { default?: ColorScheme } & { [key in VsComponent]?: ColorScheme };

export interface StyleSet {
    VsButton?: { [key: string]: VsButtonStyleSet };
    VsInput?: { [key: string]: VsInputStyleSet };
    VsSection?: { [key: string]: VsSectionStyleSet };
}

export interface VlossomOptions {
    colorScheme?: GlobalColorScheme;
    styleSet?: StyleSet;
}

export interface Breakpoints {
    xs?: string | number;
    sm?: string | number;
    md?: string | number;
    lg?: string | number;
    xl?: string | number;
}

export enum UIState {
    IDLE = 'idle',
    SUCCESS = 'success',
    INFO = 'info',
    DANGER = 'danger',
    WARN = 'warning',
    SELECTED = 'selected',
}

export interface StateMessage {
    state: UIState;
    message: string;
}

export type Rule<T = any> = ((v: T) => string) | ((v: T) => PromiseLike<string>);
export type Message<T = any> = StateMessage | ((v: T) => StateMessage) | ((v: T) => PromiseLike<StateMessage>);

export interface InputComponentOptions<T = unknown> {
    messages?: Ref<Message<T>[]>;
    rules?: Ref<Rule<T>[]>;
    clear?: () => void;
    callbacks?: {
        onChange?: (newValue: T, oldValue: T) => void;
        onMounted?: () => void;
    };
}

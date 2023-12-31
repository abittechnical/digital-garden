import * as tailwindcss from 'tailwindcss';
import * as tailwindcss_types_config from 'tailwindcss/types/config';

type BitTailwindPluginOptions = {
    prefix: string;
    scaling: number;
    neutral: 'slate' | 'gray' | 'mauve' | 'sage' | 'olive' | 'sand';
    accent: 'crimson' | 'lime';
    radius: 'none' | 'sm' | 'md' | 'lg' | 'full';
};

declare const creightivePlugin: {
    (options: Partial<BitTailwindPluginOptions>): {
        handler: tailwindcss_types_config.PluginCreator;
        config?: Partial<tailwindcss.Config>;
    };
    __isOptionsFunction: true;
};

export { creightivePlugin, creightivePlugin as default };

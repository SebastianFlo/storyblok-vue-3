import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Spacer from '../src/components/Spacer.vue';

const blok = {
  space: 'lg',
};

const expectedClass = 'seftek-spacer--lg';

describe('Spacer.vue', () => {
  it('should have expected spacer class', () => {
    const wrapper = mount(Spacer, { props: { blok } });
    expect(wrapper.classes()).contains(expectedClass);
  });
});

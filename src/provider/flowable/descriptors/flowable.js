import bpmStencil from '../flowable/stencilset_bpmn.json';

const stencilsMap = bpmStencil.stencils.reduce(
  (p, i) => ({ ...p, [i.id]: i }),
  {}
);
const propertyPackagesMap = bpmStencil.propertyPackages.reduce(
  (p, i) => ({ ...p, [i.name]: i }),
  {}
);

export default {
  descriptors: {
    name: 'flowable',
    uri: 'http://flowable.org/bpmn',
    prefix: 'flowable',
    xml: {
      tagAlias: 'lowerCase',
    },
  },
};

export default {
  name: 'foo',
  data: () => {
      return {
          myData: "coucou"
      }
  },
  template: `
      <div>
        <button class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
          coucou
        </button>
          je suis ici je suis en train de faire mon premier component vue
          {{ myData }}
      </div>
  `
};

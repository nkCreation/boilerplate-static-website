module.exports = function (plop) {

  // Partials

  plop.setGenerator('partial', {
    description: 'Generate a HTML partial',
    prompts: [
      {
        type: 'input',
        name: 'filename',
        message: 'Partial file name',
        default: 'partial'
      }
    ],
    actions: [{
      type: 'add',
      path: './src/views/_partials/_{{ dashCase name }}.html',
      templateFile: './templates/partial/html.hbs'
    },
    {
      type: 'add',
      path: './src/sass/partials/{{ dashCase name }}.sass',
      templateFile: './templates/partial/sass.hbs'
    },
    {
      type: 'append',
      path: './src/sass/styles.sass',
      templateFile: './templates/partial/sass-import.hbs'
    }]
  });

  // Page

  plop.setGenerator('page', {
    description: 'Generate a HTML page',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Page path',
        default: '.'
      },
      {
        type: 'input',
        name: 'filename',
        message: 'Page file name',
        default: 'index'
      },
      {
        type: 'input',
        name: 'title',
        message: 'Page human title',
        default: (values) => values.filename
      },
    ],
    actions: [{
      type: 'add',
      path: './src/views/{{ path }}/{{ lowerCase filename }}.html',
      templateFile: './templates/page/html.hbs'
    },
    {
      type: 'add',
      path: './src/sass/pages/{{ dashCase title }}.sass',
      templateFile: './templates/page/sass.hbs',
    },
    {
      type: 'append',
      path: './src/sass/styles.sass',
      templateFile: './templates/page/sass-import.hbs'
    }]
  });

  // Helpers

  plop.setHelper('relativePath', function (path) {
    let relativePath = '';
    const parts = path.split(/\//g);

    if (parts.length <= 1) {
      return './';
    }

    parts.forEach(() => {
      relativePath += '../';
    });

    return relativePath;
  });
};

require.config({
    baseUrl: "javascript",
    packages: ['carousel','jqthumb'],
    paths: {
        jquery: 'lib/jquery.min',
        bootstrap: 'lib/bootstrap'

    }
});

//carousel.html 事例
require(['carousel']);
require(['jqthumb']);



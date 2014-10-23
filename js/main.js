(function() {
  $(function() {
    var address;
    address = ['aviv', '@', 'berkeley', '.', 'edu'].join('');
    return $('#email-dynamic').attr('href', "mailto:" + address);
  });

}).call(this);

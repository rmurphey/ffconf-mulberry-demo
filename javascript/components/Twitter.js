dojo.provide('client.components.Twitter');

mulberry.component('Twitter', {
  componentTemplate : dojo.cache('client.components', 'Twitter/Twitter.haml'),
  tweetTemplate : dojo.cache('client.components', 'Twitter/Tweet.haml'),

  init : function() {
    var data = this.baseObj.getData('twitter');
    console.log('DATA IS', data);
    console.log('DOING IT', client.data.Twitter);
    client.data.Twitter.search(data.term)
      .then(dojo.hitch(this, '_onLoad'));
  },

  _onLoad : function(data) {
    var tpl = mulberry.haml(this.tweetTemplate),
        tweets = dojo.map(data.results, function(t) {
          t.date = dojo.date.locale.format(
            new Date(t.created_at), {
              datePattern : 'EEE',
              timePattern : 'h:mm a'
            }
          );

          t.text = t.text.replace(
            /@(\S+)/g,
            "<a href='http://twitter.com/#!/$1'>@$1</a>"
          );

          return t;
        });

    this.populate(tpl, tweets);
  }
});

client.commands({
  name: "ping",
  code: `
  $title[Pong!]
  $description[> My latency is $ping/ms]
  $footer[Made by FuelEx]
  $color[Orange]
  `
});

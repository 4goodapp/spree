<a href="https://spreecommerce.org">
   <img src="https://raw.githubusercontent.com/spree/spree/master/guides/src/images/features/spree_header%402x.png" alt="Spree Commerce - a headless multi-language, multi-currency, multi-store open source e-commerce platform" />
</a>

# Spree Commerce

* [Success Stories](https://spreecommerce.org/stories/)
* [Documentation](https://dev-docs.spreecommerce.org/)
* [Integrations](https://spreecommerce.org/integrations/)
* [Join our Slack community](http://slack.spreecommerce.org/)
* [Support](https://spreecommerce.org/contact/)

[![Gem Version](https://badge.fury.io/rb/spree.svg)](https://badge.fury.io/rb/spree) [![Circle CI](https://circleci.com/gh/spree/spree.svg?style=shield)](https://circleci.com/gh/spree/spree/tree/master) [![Test Coverage](https://api.codeclimate.com/v1/badges/8277fc2bb0b1f777084f/test_coverage)](https://codeclimate.com/github/spree/spree/test_coverage)

**Spree** is a headless open source e-commerce platform for global brands. It was started by Sean Schofield and is now developed by [Spark Solutions][spark]. We're open to [contributions](https://guides.spreecommerce.org/developer/contributing/).

## Key Features

![admin panel](guides/src/images/features/admin_panel_978@2x.jpg)

* **[Headless Commerce](https://spreecommerce.org/use-cases/headless-ecommerce-api/)** - build mobile apps or custom storefronts in any technology, [JS/TS SDK available](https://github.com/spree/spree-storefront-api-v2-js-sdk)
* **[PWA](https://spreecommerce.org/use-cases/spree-pwa-progressive-web-application/)** - offline shopping experiences like native mobile apps
* **[Global Commerce](https://spreecommerce.org/use-cases/international-sales-demo/)** - multi currency and multi language support out of the box, different shipping methods / costs for different regions, advanced tax calculation
* **Multi-Store** - host multiple brands / stores on one Spree instance with different branding, configuration, payment methods, shipping options, product catalogs etc
* **[Multi-vendor marketplace](https://spreecommerce.org/use-cases/multi-vendor-marketplace-demo/)** - run your own marketplace with multiple suppliers with dedicated Supplier Dashboard
* **Responsive Admin Panel** - manage and curate products, users, orders, returns, shipments & more
* **Orders** - robust system for orders, shipments, returns and refunds
* **Carts** -  comprehensive and advanced discounts system
* **Payments** - over 30 payment provider integration out of the box plus API to integrate any other gateway
* **Run everywhere** - cloud, VPS, Docker, Kubernetes
* **Battle Tested** - used by thousands of merchants around the globe in all categories since 2007!
* **Fully customizable** - pick and choose parts you want to use and customize everything else (storefront, order processing, API, etc) to create unique solutions that your business requires
* **More features available via extensions** - dozens of extensions built by community, ready for use for free!

![multi store](guides/src/images/features/international_978@2x.png)

## Demo

See Spree in action: [demo.spreecommerce.org](https://demo.spreecommerce.org/)

Or fire up your own demo on Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/spree/spree_starter)

Admin panel credentials for your own Heroku demo:

* login: `spree@example.com`
* password: `spree123`

## Installation

### Option A - use Spree Starter with Docker

1. [Install Docker](https://docs.docker.com/get-docker/)
2. Download [Spree Starter](https://github.com/spree/spree_starter/archive/main.zip)
3. Unzip it
4. Run `bin/setup` in `spree_starter-main` directory

### Option B - add Spree to an existing Ruby on Rails application

1. [Please follow Add Spree to an existing Ruby on Rails application tutorial](https://guides.spreecommerce.org/developer/advanced/existing_app_tutorial.html)

## Documentation

[Developer Documentation](https://dev-docs.spreecommerce.org/)

## Extensions

Extensions provide additional features and integrations for your Spree application

[Go to Extensions Directory](https://dev-docs.spreecommerce.org/extensions/extensions)

## Contributing

Spree is an open source project and we love contributions in any form - pull requests, issues, feature ideas!

Please review the [Contributing Guide](https://dev-docs.spreecommerce.org/contributing/index)

## License

Spree is released under the [New BSD License](https://github.com/spree/spree/blob/master/license.md).

## About Spark Solutions

[![Spark Solutions](http://sparksolutions.co/wp-content/uploads/2015/01/logo-ss-tr-221x100.png)][spark]

[Spark Solutions][spark] is a full stack eCommerce agency specialized in Spree Commerce, Ruby on Rails and JavaScript. We’ve been leading Spree open-source efforts since 2016 as its core team. We also do client work. Our project teams consist of Designers, Software Engineers, Testers and Project Managers practicing agile project delivery. We’ll integrate our team with yours to jointly architect, deliver, maintain and scale the software products you need. You drive the project with requirements and acceptance testing and we help you deliver faster using industry-standard project management and comms best practices.

We are passionate about open source software.
We are [available for hire][spark].

[spark]:https://sparksolutions.co?utm_source=github

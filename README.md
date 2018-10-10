# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

A request is sent from my computer to a domain name server.  The DNS returns and IP address for the server that hosts the website.  The browser will then request the page from the web server using the IP address.  The web server returns the page to the IP address of the browser requesting the page.  The browser will then take the info and display it as a webpage.

## From start to finish how does that data reach you to be rendered in the browser?

The DOM is formed from the html that it gets from the server.  The CSS Object Model is then formed from the styles the browser receives in CSS.  A rendering tree is then created.  The render tree describes the visual representation of the DOM.  The coordinates of elements for each render tree are calculated in a layout.  The browser window takes these calculations and displays them.

## What code is rendered in the browser?

html and css

## What is the server-side code’s main function?

To generate the contents of requested web pages.

## What is the client-side code’s main function?

To produce and display requested web content.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

thousands

## How many instances of the server-side code are available at any given time?

an infinite amount

## What is runtime?

The period of time a program is running which begins when the program is opened and ends when it is closed.

## How many instances of the the databases connected to the server application are created?

depends on how many the administrator creates

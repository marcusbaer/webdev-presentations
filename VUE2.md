##

![VueJS Logo](https://vuejs.org/images/logo.png)

## Vue.js

- **approachable** <!-- zugänglich --> -- with knowledge of HTML, CSS and JavaScript it's easy to understand
- **versatile** <!-- vielseitig --> -- scales between a library and a full-featured framework
- **performant** -- has a small 20KB min+gzip runtime and a fast virtual DOM
- **large** community + ecosystem with different plugins (e.g. vuex, vue-router, Bootstrap, sliders, ... SSR with Nuxt.js)

## Agenda

1. Rendering
2. Fetching data
3. State Management with Vuex
4. Single File Components

## Vue.js Rendering

### Declarative Rendering

```
<html>
    <head>
        <title>Vue introduction</title>
        <meta charset="utf-8">
        <!-- development version, includes helpful console warnings -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
        <script type="module">
        new Vue({
            el: '#app',
            data: {
                message: 'The weather in cities at ' + new Date().toLocaleString(),
            }
        })
        </script>
    </head>
    <body>
        <h1>Weather info</h1>
        <div id="app">
            <p>{{ message }}</p>
        </div>
    </body>
</html>
```

### Rendering Attributes

```
<p :title="message">{{ message }}</p>
```

### Loops

in template:
```
<ol>
    <li>Köln</li>
</ol>
```

in data:
```
cities: [
    { name: 'Berlin' },
    { name: 'Köln' },
    { name: 'Ohrid' },
    { name: 'Skopje' },
]
```

in template:
```
<li v-for="(city, index) in cities" :city="city" v-bind:key="index">{{ city.name }}</li>
```

### Bind User Input

in template:
```
<input v-model="message" />
```

in data:
```
message: 'The weather in cities at',
now: new Date().toLocaleString(),
```

in template:
```
<p :title="message">{{ message }} {{ now }}</p>
```

### Conditional

in data:
```
editMode: false,
```

in template:
```
<input v-model="message" v-if="editMode" />
```

in template:
```
<p :title="message" @click="editMode = !editMode">{{ message }} {{ now }}</p>
```

### Custom Directives

in JS:
```
Vue.directive('pointer', {
    bind (el, binding, vnode) {
        el.style.cursor = 'pointer'
    }
})
```

Can be used for click events etc. as well

in template:
```
<p v-pointer :title="message" @click="editMode = !editMode">{{ message }} {{ now }}</p>
```

### Components

in JS:
```
Vue.component('city', {
    props: ['city'],
    template: '<li>{{ city.name }}</li>',
})
```

in template:
```
<city v-for="(city, index) in cities" :city="city" v-bind:key="index"></city>
```

### Events

click and pointer in JS of city component:
```
Vue.component('city', {
    props: ['city'],
    template: '<li @click="pick(city)" v-pointer>{{ city.name }}</li>',
    methods: {
        pick (city) {
            this.$emit('picked', city)
        }
    }
})
```

in JS of app wrapper:
```
methods: {
    onItemClicked (city) {
        alert(`Clicked at ${city.name}`)
    }
}
```

in template:
```
<city v-for="(city, index) in cities" :city="city" v-bind:key="index" @picked="onItemClicked"></city>
```

Events can be caught by custom directives. Very common need to call `event.preventDefault()` etc. can be handled by *event modifiers*. 

```
<a v-on:click.stop="doThis"></a>

<a v-on:click.once="doThis"></a>

// can be chained
<a v-on:click.stop.prevent="doThat"></a>
```

### Conditional styles

add data to city component:
```
data () {
    return {
        isActive: false
    }
},
```

extend pick method by marker toggle and disable alert:
```
pick (city) {
    this.$emit('picked', city)
    this.isActive = !this.isActive
}
```

extend city template by class rendering:
```
template: '<li @click="pick(city)" :class="{active:isActive}" v-pointer>...</li>',
```

add style after meta:
```
<style>
 .active { background: lightgray; }
</style>
```

### Using templates

in HTML:
```
<template id="weather-condition-template">
    <ul>
        <li>Temperature: 12°C</li>
        <li>Clouds: cloudy</li>
        <li>Wind: 20 km/h</li>
    </ul>
</template>
```

in JS:
```
Vue.component('weather-condition', {
    props: ['condition'],
    template: '#weather-condition-template'
})
```

add `<weather-condition/>` in template of city component:
```
template: '<li>....<weather-condition/></li>',
```

<!-- see session-01.html -->

## Fetching data

refactor city component:
```
Vue.component('city', {
    ...
    data () { // (2) add currentCondition and location
        return {
            currentCondition: {},
            location: {},
            marker: false
        }
    },
    async mounted() { // (1) use mounted
        const lang = 'en'
        const response = await fetch(`http://${lang}.wttr.in/${this.city.name}?format=j1`)
        const weatherData = await response.json()
        console.log(weatherData.current_condition, weatherData.nearest_area)
        this.currentCondition = weatherData.current_condition[0]
        this.location = weatherData.nearest_area[0]
    }
})
```

add attribute condition to weather-condition usage in city component:
```
template: '<li @click="pick(city)" v-pointer>{{ city.name }}<weather-condition :condition="currentCondition"/></li>',
```

replace weather condition template:
```
<template id="weather-condition-template">
    <ul v-if="condition.weatherDesc">
        <li>Temperature: {{ condition.temp_C }}°C</li>
        <li>Clouds: {{ condition.weatherDesc[0].value }}</li>
        <li>Wind: {{ condition.winddir16Point }} at {{ condition.windspeedKmph }} km/h</li>
    </ul>
</template>
```

## Computed properties

add link in city template right after the name:
```
{{ city.name }} <a href="#">open map</a>...
```

add computed property to city component:
```
computed: {
    mapLink () {
        const zoom = 12
        return `https://www.openstreetmap.org/?mlat=${this.location.latitude}&mlon=${this.location.longitude}#map=${zoom}/${this.location.latitude}/${this.location.longitude}`
    }
},
```

render link into href attribute:
```
{{ city.name }} <a :href="mapLink">open map</a>...
```

catch event by adding stop propagation directive to link (we cannot use the event modifier as we don't have a click event):
```
{{ city.name }} <a :href="mapLink" v-stop-propagation>open map</a>...
```

register stop-propagation directive after pointer directive:
```
Vue.directive('stop-propagation', {
    bind (el, binding, vnode) {
        el.addEventListener('click', ev => ev.stopPropagation())
    }
})
```

### Slots

1. wrap in city component message "open map" by slot: `<slot>open map</slot>`
2. provide overriding message as a slot content in template: `<city>show</city>`

<!-- TODO: left out for now -->
<!-- ### Filters -->
<!-- ### Transitions & Animation -->
<!-- ### Mixins -->

<!-- see session-02.html -->

## State Management with Vuex

We're starting with a new example to focus on the state management and use a modified version of our first sessions:

- removed the weather part, map integration and event listeners
- switched to template by id for city component
- added `.city` styles for better visibility and `class="city"` in city component
- load Vuex script from CDN
- and we tell Vue to use Vuex plugin: `Vue.use(Vuex)`

### Setup Store

is JS:
```
const store = new Vuex.Store({
    state: {
        totalClicksCounter: 0
    },
    actions: {
        countClick ({commit}, city) {
            commit('countClick', city)
        }
    },
    mutations: {
        countClick (state, city) {
            state.totalClicksCounter++
        }
    }
})
```

add to Vue:
```
Vue({
    ...,
    store
})
```

### Dispatch event

in pick method:
```
...
this.$store.dispatch('countClick', city.name)
```

### Render from store

add to Vue:
```
computed: {
    numberOfTotalClicks () {
        return this.$store.state.totalClicksCounter
    },
},
```

and render in template after `ol`:
```
<p>total clicks: {{ numberOfTotalClicks }}</p>
```

### Counting clicks by city

extend store:
```
const store = new Vuex.Store({
    state: {
        clicksByCity: {},
        ...
    },
    getters: {
        cityClicks: state => city => state.clicksByCity[city] || 0,
        totalClicks: state => {
            const cities = Object.keys(state.clicksByCity)
            let totalClicks = 0
            cities.forEach(city => {
                totalClicks += state.clicksByCity[city]
            })
            return totalClicks
        }
    },
    actions: {
        ...
    },
    mutations: {
        countClick (state, city) {
            if (!state.clicksByCity[city]) {
                Vue.set(state.clicksByCity, city, 1)
            } else {
                state.clicksByCity[city] += 1
            }
            ...
        }
    }
})
```

in city component:
```
computed: {
    ...Vuex.mapGetters([
        'cityClicks',
        'totalClicks'
    ]),
    numberOfCityClicks () {
        return this.cityClicks(this.city.name)
    }
},
```

in city template:
```
{{ city.name }} ({{ numberOfCityClicks }})           
```

<!-- see session-03.html -->

## Single File Components

- single file components are a good way to have template, JS and styles at the same place
- for larger projects or when frontend entirely driven by JS
- requires the usage of a bundler, like Webpack
- [Documentation](https://vuejs.org/v2/guide/single-file-components.html)
- https://codesandbox.io/s/

## How to get started by yourself

- https://vuejs.org/ -- for the basics
- https://codesandbox.io/s/ -- for single file components
- https://vuex.vuejs.org/ -- for state management with Vuex

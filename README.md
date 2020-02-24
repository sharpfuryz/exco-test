## What it is this?
This is "test task" for Playbuzz company. The goal is to add support to specific item type to the grid, refactor code, fix some details related to css.

Input information: this should be done in 3 hours. 

Initial plan:
* Understand how things are working
* Implement custom item type
* Add react-router dom (we need item page with back button)
* Fix bugs

## How-to build and run it?
This github repo already contains build folder (however in initial .gitignore this folder was ignored, but just to make sure that you can see code - it pushed it) with all neccessary stuff, but if you want to build it manually you should run:
```
npm run build
```

### Decisions
* No typescript, no tests, no proptypes - lack of time
* No rollup, parcel - react-scripts with preconfigured webpack is a good option for such a small code (<200 kb).
* Maximum effort to refactor DisplayItem - it contained biggest amount of invalid code
* Include json datasource via require on compile time (no axios, lazy, Suspense)
* Don't implement hamburger menu - no information/styles provided for this feature
* Resize ex.co svg icon from 40 to 24 to use it in DisplayItem
* Don't add ex.co to VideoSourceTypes (this is not a video type)
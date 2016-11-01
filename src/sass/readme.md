This is Alex's front end Sass framework. It's not fully documented, but here is
an overview of the folder structure, in the same order they are imported.

## Config
`config` is where we setup variables such as colors, breakpoints (using
breakpoint.sass) and grid configuration (columns, column width, etc using
Susy). `_typography.sass` should contain mixin definitions for the fonts being
used as well as the standard baseline and font-size variables.

## Utilities
`utilities` is for snippets of Sass that can be re-used from project to
project. Helper functions for rgba, @extends that can be used for very general
purposes, etc. No code in this folder should output actual CSS, everything
should be a mixin definition, a % rule, or a Sass function. However, this is
not always the case.

## Reset
`reset` is for ... resets! You'll see there are a couple types of items you
might want to reset setup here, feel free to add new ones. This is where we
keep things like buttons, links, and default typography. Normalize is used as a
starting point.

## Modules
‘modules’ is where you actually get things done. Fill it up with a bunch of
files like ‘_header.sass’ and ‘_social-icon-list.sass` or whatever you want
really. Try to stay organized. Make sub-folders if you want! Or don't! 99% of
the code which actually generates CSS should be under this directory.

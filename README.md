JSPM Resource Bundles
---------------------

This repo demonstrates loading external files on-demand using [JSPM/SystemJS](https://github.com/systemjs/systemjs).  In this specific example, I'm loading language resource bundles from an external CDN.

Although conceptually, the process isn't a complex one, it's taken me some time to figure out how to achieve this.  With the [SystemJS Builder](https://github.com/systemjs/builder), externally mapped resources always seemed to be needed to be inlined into the production bundle. In a use case such of loading the possibility of dozens of large language resource bundles, this would be a problem.
 

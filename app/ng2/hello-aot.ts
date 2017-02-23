
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../../aot/app/ng2/app.module.ngFactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

### Usage
```typescript
import { TimerService } from '@axa-ch/ng2-component-starter/components/timer';
...
@Component({
    ...
    providers: [TimerService],
    ...
})
...
constructor(public timerService:TimerService){}
...
this.timerService.start(numOfSeconds, optionalCallbackFunction);
...
```

### Callback
the `optionalCallbackFunction` gets called as soon as the time is up.
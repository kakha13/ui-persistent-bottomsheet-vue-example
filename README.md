# ui-persistent-bottomsheet-vue-example
`Android emulator`

`Android Version: 12`

```
System.err: Unable to start activity ComponentInfo{org.nativescript.uipersistentbottomsheetvue/com.tns.NativeScriptActivity}: com.tns.NativeScriptException: Calling js method onCreate failed
System.err: Error: a Page or a GestureRootView is needed to attach a gesture
System.err:
System.err: StackTrace:
System.err: java.lang.RuntimeException: Unable to start activity ComponentInfo{org.nativescript.uipersistentbottomsheetvue/com.tns.NativeScriptActivity}: com.tns.NativeScriptException: Calling js method onCreate failed
System.err: Error: a Page or a GestureRootView is needed to attach a gesture
System.err:     at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:3685)
System.err:     at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:3842)
System.err:     at android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:103)
System.err:     at android.app.servertransaction.TransactionExecutor.executeCallbacks(TransactionExecutor.java:135)
System.err:     at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:95)
System.err:     at android.app.ActivityThread$H.handleMessage(ActivityThread.java:2252)
System.err:     at android.os.Handler.dispatchMessage(Handler.java:106)
System.err:     at android.os.Looper.loopOnce(Looper.java:201)
System.err:     at android.os.Looper.loop(Looper.java:288)
System.err:     at android.app.ActivityThread.main(ActivityThread.java:7842)
System.err:     at java.lang.reflect.Method.invoke(Native Method)
System.err:     at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:548)
System.err:     at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1003)
System.err: Caused by: com.tns.NativeScriptException: Calling js method onCreate failed
System.err: Error: a Page or a GestureRootView is needed to attach a gesture
System.err:     at com.tns.Runtime.callJSMethodNative(Native Method)
System.err:     at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1302)
System.err:     at com.tns.Runtime.callJSMethodImpl(Runtime.java:1188)
System.err:     at com.tns.Runtime.callJSMethod(Runtime.java:1175)
System.err:     at com.tns.Runtime.callJSMethod(Runtime.java:1153)
System.err:     at com.tns.Runtime.callJSMethod(Runtime.java:1149)
System.err:     at com.tns.NativeScriptActivity.onCreate(NativeScriptActivity.java:57)
System.err:     at android.app.Activity.performCreate(Activity.java:8054)
System.err:     at android.app.Activity.performCreate(Activity.java:8034)
System.err:     at android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1341)
System.err:     at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:3666)
System.err:     ... 12 more
```

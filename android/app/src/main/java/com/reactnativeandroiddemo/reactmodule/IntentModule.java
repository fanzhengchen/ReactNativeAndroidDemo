package com.reactnativeandroiddemo.reactmodule;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by mark on 16-10-9.
 */

public class IntentModule extends ReactContextBaseJavaModule {

    public IntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IntentModule";
    }

    @ReactMethod
    void startActivity(String name, String params) {
        Activity activity = getCurrentActivity();
        if (activity != null) {
            try {
                Class targetClass = Class.forName(name);
                activity.startActivity(new Intent(activity, targetClass));
            } catch (ClassNotFoundException e) {
                throw new JSApplicationIllegalArgumentException(
                        "不能打开Activity : "+e.getMessage());
            }
        }
    }
}

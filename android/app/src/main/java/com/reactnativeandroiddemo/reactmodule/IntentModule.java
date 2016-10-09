package com.reactnativeandroiddemo.reactmodule;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

/**
 * Created by mark on 16-10-9.
 */
@ReactModule(name = "IntentModule")
public class IntentModule extends ReactContextBaseJavaModule {

    public IntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "IntentModule";
    }

    @ReactMethod
    public void startActivity(String name, String params) {
        Log.d("IntentModule", "fuck start activity");
        Activity activity = getCurrentActivity();
        if (activity != null) {
            try {
                Class targetClass = Class.forName(name);
                Intent intent = new Intent(activity, targetClass);
                intent.putExtra("params", params);
                activity.startActivity(intent);
            } catch (ClassNotFoundException e) {
                throw new JSApplicationIllegalArgumentException(
                        "不能打开Activity : " + e.getMessage());
            }
        }
    }

    @ReactMethod
    public void dataToJs(Callback success, Callback error) {
        try {
            Intent intent = getCurrentActivity().getIntent();
            Bundle bundle = intent.getExtras();
            Log.d("intent module", getCurrentActivity().getLocalClassName());
            String data = bundle.getString("data");
            success.invoke(data);
        } catch (Exception e) {
            error.invoke("No data");
        }
    }
}

package com.reactnativeandroiddemo;

import android.app.Activity;
import android.os.Bundle;
import android.os.PersistableBundle;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

/**
 * Created by mark on 16-11-2.
 */

public class ImmutableActivity extends ReactActivity {

    @Nullable
    @Override
    protected String getMainComponentName() {
        return "ImmutableContainer";
    }
}

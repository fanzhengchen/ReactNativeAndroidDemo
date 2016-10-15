package com.reactnativeandroiddemo;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import com.facebook.react.ReactActivity;

import butterknife.ButterKnife;
import butterknife.OnClick;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
    }

    @OnClick(R.id.first_activity)
    public void firstActivity() {
        startActivity(new Intent(this, FirstActivity.class));
    }

    @OnClick(R.id.second_activity)
    public void secondActivity() {
        Intent intent = new Intent(this, SecondActivity.class);
        intent.putExtra("data", "data from native to JavaScript");
        startActivity(intent);
    }

    @OnClick(R.id.third_activity)
    public void thirdActivity() {
        startActivity(new Intent(this, AnimatedActivity.class));
    }

    @OnClick(R.id.redux_activity)
    public void reduxActivity() {
        startActivity(new Intent(this, ReduxActivity.class));
    }

}

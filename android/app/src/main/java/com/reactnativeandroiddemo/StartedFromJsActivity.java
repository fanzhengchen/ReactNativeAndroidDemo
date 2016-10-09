package com.reactnativeandroiddemo;

import android.app.Activity;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.widget.TextView;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * Created by mark on 16-10-9.
 */

public class StartedFromJsActivity extends Activity {

    @BindView(R.id.center_text)
    TextView mCenterText;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_started_from_js);
        ButterKnife.bind(this);
        Bundle bundle = getIntent().getExtras();

        String params = bundle.getString("params");
        mCenterText.setText(params);
    }
}

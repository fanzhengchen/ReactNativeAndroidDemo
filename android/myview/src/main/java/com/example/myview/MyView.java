package com.example.myview;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.util.AttributeSet;
import android.view.View;

/**
 * Created by mark on 16-10-11.
 */

public class MyView extends View {

    private Paint mOutPaint = new Paint();
    private int mCenterX;
    private int mCenterY;
    private int color;

    public MyView(Context context) {
        super(context, null);
    }

    public MyView(Context context, AttributeSet attrs) {
        super(context, attrs, 0);
        initValue();
    }

    private void initValue() {
        color = Color.parseColor("#FFFFFF");
        mOutPaint.setColor(color);
        mOutPaint.setAntiAlias(true);
        mOutPaint.setStrokeWidth(4);
    }

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        mCenterX = MeasureSpec.getSize(widthMeasureSpec) >> 1;
        mCenterY = MeasureSpec.getSize(heightMeasureSpec) >> 1;
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);


        canvas.save();
        for (int i = 0; i < 120; ++i) {
            canvas.rotate(3, mCenterX, mCenterY);
            mOutPaint.setAlpha(255 - i * 2);
            canvas.drawLine(mCenterX, 150, mCenterX, 175, mOutPaint);
        }

        canvas.restore();
    }
}

package com.rey.filmfinder

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webViewVariable: WebView = findViewById(R.id.webView)
        webViewSetup(webViewVariable)
    }

    private fun webViewSetup(webViewVariable: WebView) {
        webViewVariable.apply {
            settings.javaScriptEnabled = true
            settings.allowContentAccess = true
            settings.domStorageEnabled = true
            settings.useWideViewPort = true
            settings.loadWithOverviewMode = true
            settings.javaScriptCanOpenWindowsAutomatically = true
            webViewVariable.loadUrl("https://film-finder-1.netlify.app/")
        }
    }
}
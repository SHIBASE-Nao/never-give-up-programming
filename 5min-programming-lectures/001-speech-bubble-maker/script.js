// buttonのonClickで呼ばれる処理
function createBubble() {
    // 入力されたメッセージを取得
    const message = document.getElementById('message').value;
    
    // 文字幅を正確に計測する関数
    function getTextWidth(text) {
        const ctx = document.createElement('canvas').getContext('2d');
        ctx.font = '14px monospace';
        return ctx.measureText(text).width;
    }
    
    // 吹き出しの文字を変数に格納
    const topStart = '+'; // 吹き出しの左上の文字
    const topMiddle = '-'; // 吹き出しの上部の中間部分の文字(繰り返し部分)
    const topEnd = '+'; // 吹き出しの右上の文字
    const middleStart = '|'; // 吹き出しの左側の文字
    const middleEnd = '|'; // 吹き出しの右側の文字
    const space = ' '; // メッセージの前後のスペース
    const bottomStart = '+'; // 吹き出しの左下の文字
    const bottomMiddle = '-'; // 吹き出しの下部の中間部分の文字(繰り返し部分)
    const bottomEnd = '+'; // 吹き出しの右下の文字
    
    // 各文字の幅を取得
    const topStartWidth = getTextWidth(topStart);
    const topMiddleWidth = getTextWidth(topMiddle);
    const topEndWidth = getTextWidth(topEnd);
    const middleStartWidth = getTextWidth(middleStart);
    const middleEndWidth = getTextWidth(middleEnd);
    const bottomStartWidth = getTextWidth(bottomStart);
    const bottomMiddleWidth = getTextWidth(bottomMiddle);
    const bottomEndWidth = getTextWidth(bottomEnd);
    const spaceWidth = getTextWidth(space);
    
    // メッセージの実際の幅を計測
    const messageWidth = getTextWidth(message);
    
    // 吹き出しの枠の幅を計算（メッセージ幅 + 両端のスペース）
    const targetWidth = messageWidth + (spaceWidth * 2) + middleStartWidth + middleEndWidth;
    
    // 上部の中間文字の繰り返し回数を計算
    const topBorderWidth = targetWidth - topStartWidth - topEndWidth;
    const topRepeatCount = Math.max(1, Math.round(topBorderWidth / topMiddleWidth));
    
    // 下部の中間文字の繰り返し回数を計算
    const bottomBorderWidth = targetWidth - bottomStartWidth - bottomEndWidth;
    const bottomRepeatCount = Math.max(1, Math.round(bottomBorderWidth / bottomMiddleWidth));
    
    // 吹き出しのアスキーアートを作成
    const topLine = topStart + topMiddle.repeat(topRepeatCount) + topEnd;
    const middleLine = middleStart + space + message + space + middleEnd;
    const bottomLine = bottomStart + bottomMiddle.repeat(bottomRepeatCount) + bottomEnd;
    
    const bubble = topLine + '\n' + middleLine + '\n' + bottomLine;
    
    // 結果を表示
    document.getElementById('output').textContent = bubble;
}
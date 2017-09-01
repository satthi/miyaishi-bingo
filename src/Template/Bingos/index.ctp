<!DOCTYPE html>
<html>
<head>
    <?= $this->Html->charset() ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Miyaishi & aaa Happy Wedding BINGO!
    </title>
    <script>
        var list = <?= json_encode($list);?>;
    </script>
    <?= $this->Html->script('jquery');?>
    <?= $this->Html->script('bingo');?>
    <?= $this->Html->css('bingo');?>
</head>
<body>
    <div id="content">
        <div id="header">
            <div id="header-yoshitaka">Yoshitaka</div>
            <div id="header-miyu">Miyu</div>
            <div id="header-happy">Happy</div>
            <div id="header-wedding">Wedding</div>
            <div id="header-bingo">Bingo!</div>
        </div>
        <div id="left-side">
            <?php for($i = 1; $i <= 5;$i++):?>
                <div class="ball"></div>
            <?php endfor;?>
        </div>
        <div id="main">
            <?= $this->Html->image('main.jpg', ['width' => 600, 'id' => 'main_image']);?>
            <?php for ($i = 1;$i <= 75;$i++) :?>
                <div id="number_div_<?= $i;?>" class="number_div" style="display: none;">
                    <div class="number"><?= $i;?></div>
                    <?= $this->Html->image($i . '.jpg', ['width' => 600, 'class' => 'number_image']);?>
                </div>
            <?php endfor;?>
        </div>
        <div id="right-side">
            <?php for($i = 1; $i <= 70;$i++):?>
                <div class="ball"></div>
            <?php endfor;?>

        </div>
    </div>
</body>
</html>

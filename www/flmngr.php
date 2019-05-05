<?php

require __DIR__ . '/../vendor/autoload.php';

use EdSDK\FlmngrServer\FlmngrServer;

FlmngrServer::flmngrRequest(
    array(
        'dirFiles' => __DIR__ . '/files',
        'dirTmp'   => __DIR__ . '/tmp',
        'dirCache' => __DIR__ . '/cache'
    )
);
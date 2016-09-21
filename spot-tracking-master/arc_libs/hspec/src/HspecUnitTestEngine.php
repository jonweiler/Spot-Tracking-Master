<?php

final class HspecUnitTestEngine extends ArcanistUnitTestEngine {

  public function run() {
    $working_copy = $this->getWorkingCopy();
    $this->project_root = $working_copy->getProjectRoot();

    $future = $this->buildTestFuture();

    #do {
    #  list($stdout, $stderr) = $future->read();
    #  echo $stdout;
    #  sleep(0.5);
    #} while (!$future->isReady());

    list($err, $stdout, $stderr) = $future->resolve();

    $results = array();
    $result = new ArcanistUnitTestResult();
    if (strpos($stdout, 'PASS')) {
      $result->setResult(ArcanistUnitTestResult::RESULT_PASS);
    } else {
      $result->setResult(ArcanistUnitTestResult::RESULT_FAIL);
      $result->setUserData($stderr);
    }
    $results[] = $result;

    return $results; 
  }

  public function shouldEchoTestResults() {
    return true;
  }

  public function buildTestFuture() {
    $paths = $this->getPaths();
    $cmdline = 'cabal test';
    return new ExecFuture('%C', $cmdline);
  }
}

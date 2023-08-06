
const core = require('@actions/core');
const exec = require('@actions/exec');


function run(){
    core.notice('Running deploy-s3-js action');

    const bucket = core.getInput('bucket', {required: true});
    const region = core.getInput('region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    const s3Uri = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region}`)
    const websiteUrl = `http://${bucket}.s3-website-${region}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
}

run();



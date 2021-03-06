/* Copyright 2014 Krzysztof Daniel

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/

/**
 * This module holds Google API Keys useful required to obtain permissions
 * from Google+.
 */
function googleauth() {
	
	this.getClientID = function (){
		var result = process.env.WM_GOOGLE_CLIENT_ID || "";
		if(result === ''){
			console.log("please consider creating your own google keys!");
		}
		return result;
	};
	
	this.getClientSecret = function () {
	    var result = process.env.WM_GOOGLE_CLIENT_SECRET || "";
		if(result === ''){
			console.log("please consider creating your own google keys!");
		}
		return result;
	};
	
}

var googleauth = new googleauth();

exports.googleauth = googleauth;
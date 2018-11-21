import { Pipe, PipeTransform } from '@angular/core';

declare var angular: angular.IAngularStatic;

@Pipe({ name: 'talkDuration' })
export class TalkDurationPipe implements PipeTransform {
	transform(duration: number): string {
		return `Duration: ${duration} minutes`;
	}
}

let pipe = new TalkDurationPipe();

angular
	.module('app')
	.filter('talkDuration', () => (duration) => pipe.transform(duration));

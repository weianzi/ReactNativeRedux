//
//  CalendarManager.m
//  ReactNativeRedux
//
//  Created by ancool on 16/2/27.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import "RCTConvert.h"

#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)details)
{
  NSString *location = [RCTConvert NSString:details[@"location"]];
  NSString *ok = [RCTConvert NSString:details[@"ok"]];

  //NSDate *time = [RCTConvert NSDate:details[@"time"]];
  
  NSLog(@"部分 %@ 相同的 %@ 时候用 %@ 它来避免在", name, location, ok);

}

@synthesize bridge = _bridge;

- (void)calendarEventReminderReceived
{
  //NSString *eventName = notification.userInfo[@"name"];
  [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder"
                                               body:@{@"name": @"sdfdfdfhfhfh"}];
}


@end
//
//  CalendarManager.h
//  ReactNativeRedux
//
//  Created by ancool on 16/2/27.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"

@interface CalendarManager : NSObject <RCTBridgeModule>
- (void)calendarEventReminderReceived;

@end

# `Pin Planner`

![logo.png](https://i.imgur.com/QNyQiQF.png)\
This is a demo **`booking scheduler`** for my **portfolio**. It was actually designed for a bowling company.
So most of the features you see are made especially for that company. After the project was done, I started adding some
extra
features, so it could be used for several companies or other usages.
It's structured by rows with number of lanes and cols with the time.
There are several thing that can be changed in the settings. Number of lanes, language, design or a custom price for the
lanes.

The idea was to create a scheduler that can add customers to a specific day and visualize it in a grid. The Main thing
was
to make it usable by multiple accounts to achieve using the scheduler with many clients at the same time as possible.

`Disclaimer`: This is just a demo, so it's not connected to a database and there is no option for use of multiple
clients.

`Demo:` [Pin Planner](https://alexanderklass.github.io/Pin-Planner/)

### Tech

- `Typescript`
- `React`
- `Electron`

## Configuration before starting

![settings.gif](https://i.imgur.com/2VPF3dw.gif)\
First things first, the standard lane number is set to 12. You can change it to the lanes you need.
Afterward it's not recommended to change it. Also, the language can be changed, at the moment there are only two,
german and english.

## How to start adding customers?

![addCustomer.gif](https://i.imgur.com/b5S6uFQ.gif)\
After everything is set up in the `settings`, you can start with adding your first customer.
By pressing at the `booking button` a new `window` appears. Now you can start entering every information.
I need to mention that every red border `input` needs to be filled in order activate the `booking button` at the bottom
right.
There are also some special things I added. For example the `booking button` won´t activate if `firstLane > secondLane `
or
`firstTime > secondTime`. At the bottom left you see two extra `toggle buttons`, the first one is to be used if one of
the `lanes` needs
a maintaining and the second one is for blocking the entire day for any events. If everything is completed and
the `booking button`
lights up green you can press it and add your first customer.

![bookingNotification.gif](https://i.imgur.com/wfdeByj.gif) \
`Note:` if everything works the `window` closes, and you get a `notification` at the top right that it was successfully
booked.
If the `window` does not close there is only one error `notification` that can appear and that is, when there is
customer already booked,
and it would overlap the existing one. So just adjust your `time` and `lane` values.

## How can I change something afterward?

![adjustingCustomer.gif](https://i.imgur.com/taHphgT.gif)\
To adjust the customer, if something needs to be changed, you can easily click on any `grid` of that customer and
a new window will appear. You´ll have now plenty of information and fields you can change. You can almost change
everything except  
the `customer name`, `the registered by employee name` or `the current price`. Here you can also `delete` the customer
or set it to `paid`,
if the customer has `paid` and wants to leave.

### How do I move the grid of the customer?

![dragAndDrop.gif](https://i.imgur.com/Zy77QYH.gif)\
To move the customer into a different location for example from `lane 1` to `lane 3`. It's pretty simple,
just `drag and drop`   
the customer where you want it to be. `Notice`, the first `grid` where the customer´s name is, will always appear first
at the next `location`.

There is also other way to `change` the `location` of the customers, by `changing` the values of `lane` and `time` will
achieve the same thing.
But it's not recommended to do it this way, cause of time efficiency and visualisation.

In case you asked yourself where the `price` comes from, it gets the value per `grid` from the `settings`. Where you
also changed
the number of `lanes`.

## About Notifications

For almost every action there will be either a `success` or `error` `notification` at the top right.
These `notifications` show what happened if something went wrong
or right. In case of an error you can adjust your actions.

## Searching for customer data

![searchbar.gif](https://i.imgur.com/8stMxoH.gif)\
How do we find customers that were booked in the future or in the past? The easiest and quickest way is by typing the
name into the `searchbar`.
You can also search the customer by pressing on the `datepicker` and selecting the date you want.

## Where does the data go after deleting the booking?

In production, you'll have a `database` for `deleted bookings`, but in this case all deleted data goes into
the `local storage.` If you do something like this,
you want to encrypt the data before sending it to the `local storage`. If you decide using the `local storage` for
sensitive customer data.

## Components of the sidebar

- `Notes`
- `Daily schedule`
- `Recycle bin`

### Notes

![notes.gif](https://i.imgur.com/LHIMIts.gif)\
These are notes for the current day. After you write anything into the fields, you need to press the `save button`
in order to save the `notes`.

### Daily schedule

![dailyScheduler.gif](https://i.imgur.com/AYbLR7H.gif)\
Here you can see every customer for the day in a quick overview. The name, time, and notes for the specific booking.
Notice the red or green circle at the top right of the customer.
It only pulses green when the `current time` is in the range of the `booking time`.

### Recycle bin

![deletedHistory.gif](https://i.imgur.com/S46xq0n.gif)\
In the recycle bin you'll find every booking that was deleted for that current day. If you deleted a booking by
accident,
no worries. There are two `buttons` one for `recovery` and one for `deleting` the booking permanently.
In this case just press the recovery and the booking will appear in the same place, unless there is already a customer
for the `lane` and `time` values. Then just move the current customer and recover the deleted one. If you try to press
the `button`
anyway, then you'll get an `error notification`.

## License

This project is under the [MIT](LICENSE.txt) license.

## Contact

Alexander Klass - [E-Mail](mailto:alexklass16@gmail.com).












